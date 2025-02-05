let SERVER_URL
if (process.env.REACT_APP_NODE_ENV === 'production') {
    SERVER_URL = process.env.REACT_APP_URL || "https://gadgets-heaven.onrender.com/api"
}
else {
    SERVER_URL = "http://localhost/api"
}

export { SERVER_URL }