import { IsNullOrEmpty } from '@/utils/stringUtils'

function SetLocalCache(key: string, value: unknown) {
    if (IsNullOrEmpty(key)) return

    if (value == null) return

    localStorage.setItem(key, JSON.stringify(value))
}

function GetLocalCache(key: string) {
    const value = localStorage.getItem(key)
    if (value != null) return JSON.parse(value)
}

function RemoveLocalCache(key: string) {
    localStorage.removeItem(key)
}

function ClearLocalCache() {
    localStorage.clear()
}

function GetLocalBoolean(key: string): boolean {
    const v = GetLocalCache(key)
    if (v) return Number(v) === 1

    return false
}

// Session storage functions
function SetSessionCache(key: string, value: unknown) {
    if (value) sessionStorage.setItem(key, JSON.stringify(value))
}

function GetSessionCache(key: string) {
    const value = sessionStorage.getItem(key)
    if (value) return JSON.parse(value)
}

function RemoveSessionCache(key: string) {
    sessionStorage.removeItem(key)
}

function ClearSessionCache() {
    sessionStorage.clear()
}

function GetSessionBoolean(key: string): boolean {
    const v = GetSessionCache(key)
    if (v) return Number(v) === 1

    return false
}

export { SetLocalCache, GetLocalCache, RemoveLocalCache, ClearLocalCache, GetLocalBoolean, SetSessionCache, GetSessionCache, RemoveSessionCache, ClearSessionCache, GetSessionBoolean }
