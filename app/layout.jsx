import './globals.css';

export const metadata = {
    title: 'Portfolio'
}

export default function RootLayout({
    children
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Signika+Negative:wght@400;600&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
