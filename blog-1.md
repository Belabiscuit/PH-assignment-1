# TypeScript Pick and Omit 

## Introduction

In TypeScript, we often have one big interface but need smaller versions of it in different places. Instead of rewriting it every time, Pick and Omit let we create those smaller versions automatically.

## The Problem(Suppose)

We have this:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

Our API response shouldn't include password. Your edit form only needs name and email. So we finished up writing this:

```typescript
interface UserApiResponse {
  id: number;
  name: string;
  email: string;
}

interface UserForm {
  name: string;
  email: string;
}
```

Now if User changes, we have to update everything manually. That's the problem.


## Pick — Take only what we need

```typescript
type UserForm = Pick<User, "name" | "email">;
```

Done. It's linked to `User`, so it updates automatically.

---

## Omit — Remove what you don't want

```typescript
type UserApiResponse = Omit<User, "password">;

```

Same idea — just say what to leave out instead of what to keep.


## Pick vs Omit — Which one to use?

- Keeping a few fields?  we must use Pick.
- Removing a few fields? we must use Omit

## Conclusion

Pick and Omit let you build smaller types from one master interface. Change the master, and everything updates. No copy-pasting, no out-of-sync types. That's DRY in action.
