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
