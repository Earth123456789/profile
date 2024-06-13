import { useEffect } from 'react';

function Error404() {

    // Change the title
    useEffect(() => {
        document.title = "Error 404";
    }, []);

    return (
        <html>
            <div className="h-screen flex items-center justify-center">
                <p className="text-2xl">404 Error | Page not found.</p>
            </div>
        </html>
    )
}

export default Error404;