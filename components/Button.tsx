type Props = {
  children: React.ReactNode
  strength?: 'primary' | 'secondary' | 'white' | 'gold'
  href?: string
}

export default function Button({ children, strength = 'white', href }: Props) {


  return (
    <div className="m-10 items-center justify-center gap-x-6">
      <a
        href={href}
        className={`px-5 drop-shadow py-4 font-medium shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-xl  rounded-sm 
        ${strength === 'primary' ? 'bg-myYellow text-white' : ''}
        ${strength === 'secondary' ? 'bg-myGreen text-white' : ''}
        ${strength === 'white' ? 'bg-slate-200 text-black' : ''}
        ${strength === 'gold' ? 'text-black bg-[#D6AD60]' : ''}
      `
        }
      >
        {children}
      </a>
    </div >
  )
}
