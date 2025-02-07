export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skz7cN49onEvqzowUkPmHBtsRoocjq8ylNbuBufeOUf19o6YKRmdhbDbLybc4hkOLgqL4EOtcOltbJp7EzK53Y2iAlmeUHeGkNXKhC3x3mQVaPXrCON5nE7ORKobbQxkBGMtAsjWTnze7MYnI0OVzcSyqosnLjg2UHFOQ1VELlJ0lbXFLezp",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
