# Why  `unknown` is safer and recommended rather then using `any` in typescript

# Introduction:
Before typescript, when we use javascript for writing large codebase there was always an issue of not showing the errors when writing code but showing it in runtime, and it was also not possible to see what type of data a component is using before go through the full component, but after typescript arrived it made it possible to declare the data types, so this is the core benefit of typescript, now if we use `any` type, it means that typescript will ignore all type of type errors which can occur in runtime but if we use unknown, it is much safer because it will force developer to verify the type before using a data.

`any` is also called as `type safety hole` because it tells typescript that `trust me! I know what im doing`, and for this it will disable type checking and for this, we can use non-existing methods in our code which will cause a bug but because of we've used any, typescript won't give the error.

On the other side `unknown` is a safer choice because:
A variable type `unknown` can hold any value but the most critical difference is that typescript won't let us do anything with it until we prove what is it.

and type narrowing is the process of narrow down a broad type like union, into a more specific one.

# Conclusion:
That is way for safer code we should use unknown rather then using any type as its removed typescript ability of throwing error. 