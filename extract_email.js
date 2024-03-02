function extractEmails(text) {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(emailRegex);
}

const text = "This is a sample text with an email address user@example.com and another one info@test.com";
const extractedEmails = extractEmails(text);
console.log(extractedEmails); 