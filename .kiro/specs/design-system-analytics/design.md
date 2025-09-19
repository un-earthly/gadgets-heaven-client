# Gadgets Heaven - AI Design Instructions & Module Development Guide

## Overview

This document provides comprehensive design instructions for AI systems to understand, maintain, and extend the Gadgets Heaven e-commerce platform. It serves as a definitive guide for creating new modules, updating existing components, and ensuring design consistency across the entire platform.

## Architecture Design Patterns

### Component Hierarchy & Organization

```
components/
├── ui/                    # Base UI primitives (shadcn/ui)
├── shared/               # Reusable business components
└── app-sidebar.tsx       # Application-specific components

app/
├── (client)/            # Customer-facing routes
├── auth/                # Authentication routes
└── dashboard/           # Admin/User dashboard routes
```

**Design Rule**: Always follow this hierarchy when creating new components. UI primitives go in `/ui`, business logic components in `/shared`, and route-specific components in their respective app directories.

### Layout System Design

#### 1. Root Layout Pattern
```typescript
// app/layout.tsx - Global layout with theme provider
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="root">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### 2. Section Layout Pattern
```typescript
// app/(client)/layout.tsx - Section-specific layout
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative">
      <BackgroundGradient />
      <div className="sticky z-50 backdrop-blur-xl top-0">
        <Header />
      </div>
      {children}
      <Footer />
      <FloatingButtons />
    </div>
  )
}
```

**Design Rule**: Each major section should have its own layout component that handles section-specific navigation, backgrounds, and common elements.

## Design System Specifications

### Color System

#### Primary Brand Colors
```css
/* Orange Brand Palette */
--orange-50: #fff7ed;
--orange-100: #ffedd5;
--orange-200: #fed7aa;
--orange-300: #fdba74;
--orange-400: #fb923c;
--orange-500: #f97316;  /* Primary brand color */
--orange-600: #ea580c;
--orange-700: #c2410c;
```

#### Neutral System
```css
/* Zinc-based Neutrals */
--zinc-50: #fafafa;
--zinc-100: #f4f4f5;
--zinc-200: #e4e4e7;
--zinc-300: #d4d4d8;
--zinc-400: #a1a1aa;
--zinc-500: #71717a;
--zinc-600: #52525b;
--zinc-700: #3f3f46;
--zinc-800: #27272a;
--zinc-900: #18181b;
--zinc-950: #09090b;
```

#### Semantic Colors
```css
/* Success */
--green-500: #22c55e;
--green-600: #16a34a;

/* Warning */
--yellow-500: #eab308;
--yellow-600: #ca8a04;

/* Error */
--red-500: #ef4444;
--red-600: #dc2626;

/* Info */
--blue-500: #3b82f6;
--blue-600: #2563eb;
```

**Design Rule**: Always use semantic color names (success, warning, error, info) rather than specific color values in components.

### Typography System

#### Font Hierarchy
```css
/* Headings */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* Page titles */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }     /* Section titles */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }   /* Card titles */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }  /* Subheadings */

/* Body Text */
.text-base { font-size: 1rem; line-height: 1.5rem; }     /* Default body */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }  /* Small text */
.text-xs { font-size: 0.75rem; line-height: 1rem; }      /* Captions */
```

#### Font Weight Scale
```css
.font-light { font-weight: 300; }    /* Light emphasis */
.font-normal { font-weight: 400; }   /* Default body text */
.font-medium { font-weight: 500; }   /* Subtle emphasis */
.font-semibold { font-weight: 600; } /* Strong emphasis */
.font-bold { font-weight: 700; }     /* Headings */
```

**Design Rule**: Use consistent font weights - normal for body text, medium for subtle emphasis, semibold for strong emphasis, and bold for headings.

### Spacing System

#### Consistent Spacing Scale
```css
/* Tailwind spacing scale (4px base unit) */
.p-1 { padding: 0.25rem; }   /* 4px */
.p-2 { padding: 0.5rem; }    /* 8px */
.p-3 { padding: 0.75rem; }   /* 12px */
.p-4 { padding: 1rem; }      /* 16px */
.p-6 { padding: 1.5rem; }    /* 24px */
.p-8 { padding: 2rem; }      /* 32px */
```

#### Component Spacing Guidelines
- **Card padding**: `p-6` (24px) for standard cards
- **Button padding**: `px-4 py-2` for default buttons
- **Section spacing**: `space-y-6` between major sections
- **Grid gaps**: `gap-4` for standard grids, `gap-6` for larger grids

## Component Design Patterns

### Card Component Pattern
```typescript
// Standard card structure
<Card className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
  <CardHeader className="pb-2">
    <CardTitle className="text-lg font-semibold">Title</CardTitle>
    <CardDescription className="text-sm text-muted-foreground">
      Description
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Main content */}
  </CardContent>
  <CardFooter className="pt-4">
    {/* Actions */}
  </CardFooter>
</Card>
```

**Design Rule**: Always use the Card component for content containers. Include proper header, content, and footer sections when needed.

### Button Hierarchy Pattern
```typescript
// Primary action
<Button variant="default" size="default">Primary Action</Button>

// Secondary action
<Button variant="outline" size="default">Secondary Action</Button>

// Subtle action
<Button variant="ghost" size="default">Subtle Action</Button>

// Destructive action
<Button variant="destructive" size="default">Delete</Button>
```

**Design Rule**: Use button variants consistently - default for primary actions, outline for secondary, ghost for subtle actions, and destructive for dangerous actions.

### Navigation Pattern
```typescript
// Sidebar navigation structure
const navigationItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home
  },
  {
    name: "Category",
    icon: Package,
    subItems: [
      { name: "Subcategory 1", href: "/path1" },
      { name: "Subcategory 2", href: "/path2" }
    ]
  }
];
```

**Design Rule**: Navigation items should always include an icon and follow the hierarchical structure with optional subItems.

### Form Design Pattern
```typescript
// Standard form structure
<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="field">Field Label</Label>
    <Input
      id="field"
      type="text"
      placeholder="Placeholder text"
      className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
    />
  </div>
  <div className="flex gap-2">
    <Button type="submit" className="flex-1">Submit</Button>
    <Button type="button" variant="outline">Cancel</Button>
  </div>
</form>
```

**Design Rule**: Forms should use consistent spacing, proper labels, and appropriate input styling with dark mode support.

## Page Layout Patterns

### Dashboard Page Structure
```typescript
export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Page Title</h1>
          <p className="text-muted-foreground">Page description</p>
        </div>
        <Button>Primary Action</Button>
      </div>

      {/* Metrics/Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Stat cards */}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Content cards */}
      </div>

      {/* Full-width sections */}
      <Card>
        {/* Detailed content */}
      </Card>
    </div>
  )
}
```

**Design Rule**: Dashboard pages should follow this structure - header with title and actions, metrics grid, main content grid, and full-width detailed sections.

### Client Page Structure
```typescript
export default function ClientPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Page Title"
        description="Page description"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Current Page" }
        ]}
      />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Page content */}
      </div>
    </PageWrapper>
  )
}
```

**Design Rule**: Client-facing pages should use PageWrapper and PageHeader components for consistency.

## Responsive Design Guidelines

### Breakpoint Strategy
```css
/* Mobile First Approach */
.grid-cols-1          /* Default: 1 column */
.md:grid-cols-2       /* Medium: 2 columns (768px+) */
.lg:grid-cols-3       /* Large: 3 columns (1024px+) */
.xl:grid-cols-4       /* Extra Large: 4 columns (1280px+) */
```

### Mobile Navigation Pattern
```typescript
// Mobile sidebar implementation
<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu className="w-6 h-6" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="w-64 p-0">
    {/* Mobile navigation content */}
  </SheetContent>
</Sheet>
```

**Design Rule**: Always provide mobile-specific navigation patterns using Sheet components for off-canvas menus.

## Dark Mode Implementation

### Theme-Aware Components
```typescript
// Component with dark mode support
<div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
  <Card className="border-zinc-200 dark:border-zinc-800">
    {/* Content */}
  </Card>
</div>
```

### Theme Toggle Pattern
```typescript
function ModeToggle() {
  const { setTheme } = useTheme()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

**Design Rule**: All components must support both light and dark themes using the established color system.

## Data Display Patterns

### Table Pattern
```typescript
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow key={item.id}>
        <TableCell className="font-medium">{item.name}</TableCell>
        <TableCell>{item.value}</TableCell>
        <TableCell className="text-right">
          <Button variant="ghost" size="sm">Edit</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Status Badge Pattern
```typescript
// Status indication with consistent colors
<Badge variant={
  status === 'active' ? 'default' :
  status === 'pending' ? 'secondary' :
  status === 'error' ? 'destructive' : 'outline'
}>
  {status}
</Badge>
```

**Design Rule**: Use consistent badge variants for status indication across all modules.

## Animation & Interaction Guidelines

### Loading States
```typescript
// Skeleton loading pattern
import { Skeleton } from "@/components/ui/skeleton"

function LoadingCard() {
  return (
    <Card className="p-6">
      <Skeleton className="h-4 w-[250px] mb-2" />
      <Skeleton className="h-4 w-[200px] mb-4" />
      <Skeleton className="h-[125px] w-full" />
    </Card>
  )
}
```

### Hover Effects
```css
/* Standard hover transitions */
.hover:bg-accent { transition: background-color 0.2s ease; }
.hover:scale-105 { transition: transform 0.2s ease; }
```

**Design Rule**: Use subtle hover effects with consistent transition timing (0.2s ease).

## Error Handling Patterns

### Error Boundary Pattern
```typescript
// Error display component
function ErrorDisplay({ error, retry }: { error: Error; retry?: () => void }) {
  return (
    <Card className="p-6 text-center">
      <div className="text-red-500 mb-4">
        <AlertCircle className="h-12 w-12 mx-auto" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
      <p className="text-muted-foreground mb-4">{error.message}</p>
      {retry && (
        <Button onClick={retry} variant="outline">
          Try Again
        </Button>
      )}
    </Card>
  )
}
```

### Form Validation Pattern
```typescript
// Form field with error state
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    className={cn(
      "bg-zinc-50 dark:bg-zinc-900",
      error && "border-red-500 focus:border-red-500"
    )}
  />
  {error && (
    <p className="text-sm text-red-500">{error}</p>
  )}
</div>
```

**Design Rule**: Always provide clear error states with appropriate styling and helpful error messages.

## Module Development Guidelines

### Creating New Modules

1. **Analyze Requirements**: Understand the business logic and user needs
2. **Follow Existing Patterns**: Use established component and layout patterns
3. **Maintain Consistency**: Adhere to the design system specifications
4. **Consider Accessibility**: Implement proper ARIA labels and keyboard navigation
5. **Test Responsiveness**: Ensure proper behavior across all screen sizes
6. **Implement Dark Mode**: Support both light and dark themes
7. **Handle Loading States**: Provide appropriate loading and error states
8. **Document Components**: Include proper TypeScript types and comments

### Updating Existing Modules

1. **Preserve Existing Patterns**: Don't break established design patterns
2. **Maintain Backward Compatibility**: Ensure existing functionality continues to work
3. **Follow Migration Strategy**: Update components incrementally
4. **Test Thoroughly**: Verify changes don't break other parts of the system
5. **Update Documentation**: Keep design documentation current

## Quality Assurance Checklist

### Design Consistency
- [ ] Uses established color palette
- [ ] Follows typography hierarchy
- [ ] Implements consistent spacing
- [ ] Uses appropriate component variants
- [ ] Supports dark mode

### Accessibility
- [ ] Proper color contrast ratios
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Focus indicators visible
- [ ] ARIA labels implemented

### Responsiveness
- [ ] Mobile-first design approach
- [ ] Proper breakpoint usage
- [ ] Touch-friendly interface
- [ ] Readable text sizes
- [ ] Appropriate spacing on all devices

### Performance
- [ ] Optimized images
- [ ] Lazy loading implemented
- [ ] Minimal bundle impact
- [ ] Efficient re-renders
- [ ] Proper caching strategies

This comprehensive design guide ensures that all future AI-generated modules and updates maintain consistency with the established Gadgets Heaven design system while providing clear instructions for implementation and quality assurance.