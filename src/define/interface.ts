// 主界面项目定义
interface IProject {
    name: string
    id: number
    desc: string
    icon: string
}

interface IMenuChild {
    title: string
    id: number
    url: string
    children: IMenuChild[]
}

interface IMenu {
    title: string
    icon: string
    id: number
    children: IMenuChild[]
}

// GM 配置项定义
// 对应 json 中 list 数组内的具体单项配置 (如：暗能 1, 赛季 1 等)
interface IGMInputItem {
    type: number
    placeholder?: string
    desc?: string
    selecter?: string
}

interface IGMItem {
    id: number
    name: string
    inputList: IGMInputItem[]
}

interface IGMmenu {
    title: string
    initial: string
    id: number
    icon: string
    list: IGMItem[]
}

export type { IProject,IMenu,IMenuChild, IGMItem, IGMmenu, IGMInputItem }
