/* eslint-disable react/prop-types */


const Profile = () => {
    return (
        <div>Profile</div>
    )
}

const User = () => {
    return (
        <div>User</div>
    )
}

const Element = () => {
    return (
        <div>
            text
        </div>
    )
}

const Button = ({Text}) => {
  return (
        <button
          type="button"
          className="
            rounded-md border 
            border-white 
            hover:bg-[#f00044]
            px-3 py-2 
            text-sm 
            font-semibold 
            text-white 
            shadow-sm 
            focus-visible:outline 
            focus-visible:outline-2 
            focus-visible:outline-offset-2 
            focus-visible:outline-white">
                {Text}
        </button>
  )
}

const ButtonHover = ({Text}) => {
    return (
        <button
            type="button"
            className="
                rounded-md 
                bg-transparent 
                hover:bg-white
                px-3 py-2 
                text-sm 
                font-semibold
                text-white
                hover:text-black  
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
                focus-visible:outline-white">
            {Text}
        </button>
    )
}

export {Profile, User, Element, Button, ButtonHover}