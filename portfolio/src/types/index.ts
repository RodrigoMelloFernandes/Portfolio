export interface IMenuState {
  menuMobile: boolean,
  setMenuMobile: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IListItems {
  label : string,
  href : string,
  offset : string
}

export interface IStackBoxComponentImg {
  url: string
}
export interface IPortfoliosImg {
  img : string
  alt : string
  content : string

}

export interface ISocialMediaComponent {
  url : string
}


