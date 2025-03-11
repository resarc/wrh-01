export default function Button({
  title, color, value, selected, setSelected
}:{
  title: string
  color: string
  value: string
  selected: string
  setSelected: any
}) {

  const triggerButton = () => {
    if (selected == value) {
      setSelected('')
    } else if (selected !== value) {
      setSelected(value)
    }
  }

  const isOpened = selected !== '' ? 'set' : 'unset'

  return(
    <button className={`${color} ${isOpened} flex h-[240px] items-center justify-center w-max rounded-r-xl px-2 py-5`} onClick={triggerButton} draggable="true">
      <p className="[writing-mode:vertical-lr]">
        {title}
      </p>
    </button>
  )
}