import React from 'react'

const UserProfile = () => {
    return (
        <div>
            <div class="my-4 mx-8">
                <figure class="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img class="w-24 h-56 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover" src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-medium">
                            <div class="text-sky-500 dark:text-sky-400">
                                Sarah Dayan <span class="text-sky-500 dark:text-sky-400"> 29</span>
                            </div>
                            <div></div>
                            <div class="text-slate-700 dark:text-slate-400">
                                Staff Engineer, Algolia
                            </div>
                            <div class="text-slate-700 dark:text-slate-400">
                                Algolia112@gmail.com
                            </div>
                            <blockquote>
                                <p class="text-lg font-medium text-justify dark:text-slate-100">
                                    “Tailwind CSS is the only framework that I've seen scale
                                    on large teams. It’s easy to customize, adapts to any design,
                                    and the build size is tiny.”
                                </p>
                            </blockquote>
                        </figcaption>
                        <div class="grid grid-cols-3 gap-4 md:grid-cols-5 p-2">
                            <button type="button" class="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400">Accept</button>
                            <button type="button" class="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-yellow-600 bg-yellow-500 hover:bg-yellow-400">Reject</button>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default UserProfile