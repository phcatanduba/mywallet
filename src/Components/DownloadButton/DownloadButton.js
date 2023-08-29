function DownloadButton({ url, filename, children }) {
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = url;

        if (filename) {
            a.download = filename;
        }

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <button onClick={handleDownload}>
            {children}
        </button>
    );
}

export default DownloadButton;