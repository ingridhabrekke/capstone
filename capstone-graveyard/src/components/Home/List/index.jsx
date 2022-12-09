import React from "react";


function List() {
    return(
        <div className="">
            <h1 className="p-8 pb-3 text-2xl">Projects (x results)</h1>
            <div class="container max-h-80 justify-start ">
              <div class="mb-5 mt-5 block h-32 rounded-md border bg-white border-gray-300 m-8">
                <div class="h-full grid-cols-5">
                  <div class="p-5">
                    <p>Project 1</p>
                    <p>Description here lalalala</p>
                  </div>
                </div>
              </div>
              <div class="mb-5 mt-5 block h-32 rounded-md border bg-white border-gray-300 m-8">
                <div class="h-full grid-cols-5">
                  <div class="p-5">
                    <p>Project 2</p>
                    <p>Description here lalalala</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

    )
}; 

export default List; 