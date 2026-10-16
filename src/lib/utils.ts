type Result<T> = { data: T; error: null } | { data: null; error: Error };

// Based on Theo's result pattern:
// https://gist.github.com/t3dotgg/a486c4ae66d32bf17c09c73609dacc5b
export async function tryCatch<T>(promise: Promise<T>): Promise<Result<T>> {
  try {
    return { data: await promise, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
}
