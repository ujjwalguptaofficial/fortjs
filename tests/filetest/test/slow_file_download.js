const puppeteer = require('puppeteer');

const slowNetworkConditions = {
    offline: false,  // simulate offline mode
    downloadThroughput: 500 * 1024,  // 500 KB/s download speed
    uploadThroughput: 500 * 1024,    // 500 KB/s upload speed
    latency: 500,  // 500 ms latency
};

async function simulateSlowDownloadAndReturnContent(fileUrl) {
    const browser = await puppeteer.launch({ headless: true }); // Launch Puppeteer in headless mode
    const page = await browser.newPage();
    // page.

    // Emulate slow network conditions (slow download speed)
    await page.emulateNetworkConditions(puppeteer.PredefinedNetworkConditions['Slow 4G']);

    // Navigate to the file URL (could be an image, video, PDF, etc.)
    const response = await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 0 });

    // Get the content type from the response headers
    const contentType = response.headers()['content-type'];
    console.log('Content Type:', contentType);  // Log content type for reference

    let content = '';

    // If the file is text-based (e.g., HTML, JSON), read it as text
    if (contentType.includes('text') || contentType.includes('json') || contentType.includes('html')) {
        content = await response.text();  // Read response body as text
    }
    // If it's a binary file (e.g., image, video), encode it as base64
    else if (contentType.includes('image') || contentType.includes('video')) {
        content = await response.buffer().then(buffer => buffer.toString('base64'));
    }

    // console.log('Content downloaded as string:');
    // console.log(content);  // Log the downloaded content (as text or base64 string)

    await browser.close();

    return content;  // Return the content as a string or base64 encoded data
}

exports.simulateSlowDownloadAndReturnContent = simulateSlowDownloadAndReturnContent;
// Example usage
// const fileUrl = 'http://localhost:3000/some-media-file.jpg'; // Replace with your file URL
// simulateSlowDownloadAndReturnContent(fileUrl)
//     .then(content => {
//         console.log('Final downloaded content:', content);
//     })
//     .catch(console.error);
