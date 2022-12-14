export interface IMenuState {
  menuMobile: boolean,
  setMenuMobile: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IListItems {
  label : string,
  href : string,
}

export interface IStackBoxComponentImg {
  img : string,
  alt : string
}
export interface IPortfoliosImg {
  img : string
  alt : string
  content : string

}

export interface ISocialMediaComponent {
  iconType : string
  href : string
}


