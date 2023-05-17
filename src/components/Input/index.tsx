function InputGroupAddon(props: any) {
  return (
    <div className="input-group-append">
      <span className="input-group-text" id="basic-addon2">Search</span>
      {props.children}
    </div>
  )
}

export default InputGroupAddon
