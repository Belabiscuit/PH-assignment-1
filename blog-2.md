# The 4 Pillars of OOP in TypeScript 

## Introduction
Big projects get messy fast. OOP's four pillars — Encapsulation, Abstraction, Inheritance, and Polymorphism — are just four ideas that help you keep that mess under control.

## 1. Encapsulation — Hide the details

Keep data inside a class. Only expose what others actually need.

```typescript
class BankAccount {
  private balance: number = 0; // hidden from outside

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
acc.getBalance(); 
acc.balance;     
```

Nobody can accidentally break our balance.



## 2. Abstraction — Hide the complexity

Show only what matters, hide how it works.

```typescript
class EmailService {
  send(to: string, message: string) {
    this.connect();   
    this.authenticate(); 
    this.deliver(to, message); 
    this.disconnect(); 
  }

  private connect()
  private authenticate() 
  private deliver(to: string, msg: string) 
  private disconnect() 
}

const mailer = new EmailService();
mailer.send("user@example.com", "Hello!"); 
```

We call one method. We don't care how it works inside.

## 3. Inheritance — Reuse what already exists

Child classes get everything the parent has, and can add more.

```typescript
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // from Animal
dog.bark(); // from Dog
```

## 4. Polymorphism 

Same method name, different behavior depending on the class.

```typescript
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }
  area() { return Math.PI * this.radius ** 2; }
}

class Rectangle extends Shape {
  constructor(private w: number, private h: number) { super(); }
  area() { return this.w * this.h; }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(s => console.log(s.area())); 
```

We loop over shapes without caring what type each one is. They just work.



## Conclusion

Encapsulation — protect your data
Abstraction — hide the complexity
Inheritance — reuse code from a parent
Polymorphism — same call, different behavior

Each pillar removes a different kind of mess. Together they make large TypeScript projects a lot easier to manage.
