function extractLinks(inputString) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    const linksArray = [];

    const modifiedStrings = inputString.replace(urlRegex, (url) => {
        const urlObject = new URL(url);
        const domain = urlObject.hostname;
        linksArray.push(url); // Collect URLs
        return `<span class="text-primary underline"><a href="${url}" target="_blank">${domain}</a></span>`; // Corrected closing `</a>` tag
    });

    return {
        originalString: modifiedStrings,
        links: linksArray, // Return links as 'links'
    };
}

export default extractLinks;
