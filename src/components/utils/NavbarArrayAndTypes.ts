export interface NavbarItemType {
    label:string,
    href: string,
    isDropDown:boolean,
    dropDownData?:any
};

export const NavbarArray: Array<NavbarItemType> =[
    {
        label:'Female',
        href:'/Category/female',
        isDropDown:false
    },
    {
        label:'Male',
        href:'/Category/male',
        isDropDown:false
    },
    {
        label:'Kids',
        href:'/Category/kids',
        isDropDown:false
    },
    {
        label:'All Products',
        href:'/Products',
        isDropDown:false
    }
]