export function block(blocks: Record<string, string> | undefined, key: string, fallback: string): string {
    const value = blocks?.[key]
    return value && value.trim() !== '' ? value : fallback
}

export function jsonBlock<T>(blocks: Record<string, string> | undefined, key: string, fallback: T): T {
    const value = blocks?.[key]

    if (! value) {
        return fallback
    }

    try {
        return JSON.parse(value) as T
    } catch {
        return fallback
    }
}
