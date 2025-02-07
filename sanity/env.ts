export const apiVersion = '2025-02-07';

export const dataset = 'production';

export const projectId = '8s9oshk3';

// Directly hardcoded API token (for demo purposes only)
export const token = 'skz7cN49onEvqzowUkPmHBtsRoocjq8ylNbuBufeOUf19o6YKRmdhbDbLybc4hkOLgqL4EOtcOltbJp7EzK53Y2iAlmeUHeGkNXKhC3x3mQVaPXrCON5nE7ORKobbQxkBGMtAsjWTnze7MYnI0OVzcSyqosnLjg2UHFOQ1VELlJ0lbXFLezp';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage);
  }
  return v;
}

// Prevent exposing sensitive tokens in frontend
function assertPrivateValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage);
  }
  if (typeof window !== 'undefined') {
    throw new Error('Attempted to access a private environment variable in the browser!');
  }
  return v;
}
