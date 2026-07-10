"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/auth-context";
import { apiFetch } from "@/lib/api-client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLoginPage() {
    const router = useRouter();
    const { loginAdmin, adminUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (adminUser) {
            router.push("/dashboard");
        }
    }, [adminUser, router]);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const result = await apiFetch<{ token: string; user: any }>("/auth/admin/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            loginAdmin(result.token, result.user);
            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message || "Invalid administrative credentials.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-md shadow-lg border-t-4 border-t-orange-600">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold tracking-tight text-center">
                        Control Center
                    </CardTitle>
                    <CardDescription className="text-center">
                        Sign in to manage your storefront and operations
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
                            {error}
                        </div>
                    )}
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Administrative Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@tenant.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isLoading}
                                className="focus:border-orange-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                                className="focus:border-orange-500"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-medium"
                            disabled={isLoading}
                        >
                            {isLoading ? "Authenticating..." : "Secure Login"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t py-4 text-xs text-muted-foreground">
                    Authorized personnel only. Sessions are audited.
                </CardFooter>
            </Card>
        </div>
    );
}
