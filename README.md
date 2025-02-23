## Setup

⚙️ How to install and run the application locally.

### **1️⃣ Install Dependencies**

✅ You need latest Node.Js version, that's it!

All other dependencies are listed in the `package.json` file and extra dependencies like browser support is automatized
and run on post install.

Run the following usual npm command to install all of them, it will also post install browsers:

```sh
npm install
```

### **2️⃣ Run the Application**

Use this command as is to run a scenario that covers a complete flow, from:

- Login
- Select a product from inventory
- See details
- Add it to cart
- See cart
- Assert product

IMPORTANT:
- Use classic Windows CMD terminal!
- Do not use POWERSHELL!
- If you want to use it, please change operator "&&", or it will not work.
```sh
npx bddgen && npx playwright test showcase chromium --headed -g @ready
```
