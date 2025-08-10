enum CacheType {
  Local = 'localStorage',
  Session = 'sessionStorage'
}

class Cache{
    storage: Storage;
    constructor(type: CacheType){
        this.storage = type === CacheType.Local ? localStorage : sessionStorage
    }

    setCache(key:string,value:any){
        if(value)
            this.storage.setItem(key,JSON.stringify(value))
    }

    getCache(key:string){
        const value = this.storage.getItem(key)
        if(value)
            return JSON.parse(value)
    }

    removeCache(key:string){
        this.storage.removeItem(key)
    }

    clearCache(){
        this.storage.clear()
    }

    getBoolean(key:string):boolean
    {
        const v = this.getCache(key)
        if(v)
            return Number(v) === 1
        
        return false
    }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)
export { localCache, sessionCache }
