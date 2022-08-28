export interface IMenuState {
  menuMobile: boolean,
  setMenuMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IWorkExperienceAccordionComponent {
  timeLine : string
  company : string
  activity : string
  activityResume : string
}

export interface ISocialMediaComponent {
  url : string
}

export interface IListItems {
  ListItemLink: string
}

export interface IStackBoxComponentImg {
  url: string
}

export interface IPortfoliosImg {
  url : string
}