import Image from 'next/image';

export default function SubHero({ title }: {
  title: string
}) {
  return (
    <div
      className={`
        bg-bylov-white
        mb-10
        md:pl-10
        pb-10
        grid
        place-items-center
        md:flex
        md:h-100
      `}
    >
      <Image 
        src='/logos/svg/UiB_Bylovjubileet_2026_Initial_Sirkel.svg' 
        alt='Logo Bylovsjubileet' 
        height={350} 
        width={350}/>
      <div className='md:grid md:content-center mx-10'>
        <div className='mt-5'>
          <div className={`
            text-center 
            text-4xl 
            md:text-left 
            md:text-5xl 
            font-semibold 
            text-bylov-red
          `}>{title}</div>
        </div>
      </div>
    </div>
  )
}