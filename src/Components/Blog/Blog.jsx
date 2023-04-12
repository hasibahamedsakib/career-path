import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center text-4xl bg-[#f9f9ff] p-14  font-bold ">
        Blogs Part
      </h1>

      <div className="container grid gap-6">
        <div className="bg-slate-100 p-6 rounded-lg">
          <h1 className="text-3xl my-4">
            1.When Should You Used Context Api ?
          </h1>
          <p className="my-3 text-gray-700 font-semibold">
            Context API can solve many problems that modern applications face,
            related to state management, for example, props drilling. Many
            solutions can solve state management issues and props drilling, but
            they may increase your build size and compromise your app
            performance. Context API is a React built-in feature, so we don’t
            have to worry about performance overhead and library installing
            issues. The props drilling problem occurs when you pass a prop
            somewhere down the tree. When a project grows, data passing through
            props becomes chaotic, making the code more vulnerable and complex.
            To tackle this problem, we use Context API.
          </p>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg">
          <h1 className="text-3xl my-4">2.What is a custom hook? </h1>
          <p className="my-3 text-gray-700 font-semibold">
            A custom hook is a special JavaScript function whose name starts
            with ‘use’ and can be used to call other hooks. Let’s take a look at
            some major differences between a custom React JS hook and React JS
            components: --A custom hook does not require a specific signature.
            --A software developer can choose what argument the custom hook has
            and what should the argument return. --A custom hook always starts
            with the name ‘use’.
          </p>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg">
          <h1 className="text-3xl my-4">3. What is useRef? </h1>
          <p className="my-3 text-gray-700 font-semibold">
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated.It can be used to access a DOM element directly.
          </p>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg">
          <h1 className="text-3xl my-4">4.What is useMemo? </h1>
          <p className="my-3 text-gray-700 font-semibold">
            The React useMemo Hook returns a memoized value.Think of memoization
            as caching a value so that it does not need to be recalculated.The
            useMemo Hook only runs when one of its dependencies update.This can
            improve performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
