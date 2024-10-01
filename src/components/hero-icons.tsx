
export default function HeroIcons(props: {classes : string, icon: string, iconStyle: string}) {
  return (
    <div className={props.classes + `rounded-full p-3 border-[1.5px] border-white`}>
        {<props.icon />}
    </div>
  )
}
