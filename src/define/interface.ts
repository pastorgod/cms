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
}

interface IMenu {
    title: string
    icon: string
    id: number
    children: IMenuChild[]
}

export type { IProject,IMenu,IMenuChild }
