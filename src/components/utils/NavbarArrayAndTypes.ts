export interface NavbarItemType {
    label:string,
    href: string,
    isDropDown:boolean,
    dropDownData?:any
};

export const NavbarArray: Array<NavbarItemType> =[
    {
        label:'Female',
        href:'/female',
        isDropDown:false
    },
    {
        label:'Male',
        href:'/male',
        isDropDown:false
    },
    {
        label:'Kids',
        href:'/Kids',
        isDropDown:false
    },
    {
        label:'All Products',
        href:'/products',
        isDropDown:false
    }
]