export interface NavbarItemType {
    label:string,
    href: string,
    isDropDown:boolean,
    dropDownData?:any,
    key:number
};

export const NavbarArray: Array<NavbarItemType> =[
    {
        label:'Female',
        href:'/Category/female',
        isDropDown:false,
        key:1
    },
    {
        label:'Male',
        href:'/Category/male',
        isDropDown:false,
        key:2
    },
    {
        label:'Kids',
        href:'/Category/kids',
        isDropDown:false,
        key:3
    },
    {
        label:'All Products',
        href:'/Products',
        isDropDown:false,
        key:4
    }
]