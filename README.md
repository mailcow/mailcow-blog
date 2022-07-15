# mailcow-blog [![github pages](https://github.com/mailcow/mailcow-blog/actions/workflows/update-blog.yml/badge.svg?branch=master)](https://github.com/mailcow/mailcow-blog/actions/workflows/update-blog.yml)
New mailcow Blog Page based on Hugo

Used Theme [LoveIT](https://github.com/dillonzq/LoveIt) by [@dillonzq](https://github.com/dillonzq)

---

### How to use

1. Clone the Repository to your computer.
2. Download and install Hugo + Extended on your PC [(Installation guide)](https://gohugo.io/getting-started/installing/)
3. Inside the cloned repository do a `hugo serve` to fireup a local Webserver with the compiled website.
4. To create a new Page simply copy a article folder (located at `content/posts/202X`) and rename the folder to a different name.
5. Edit the files in it (`index.de.md` == German, `index.en.md` == English Version of a page).

### How to build

1. After finishing a new page simply run `hugo` which will compile the whole website in a usable state.
2. Commit the changes and push them to the repo.
3. Let GitHub run the compilation process again to let the changes appear on the live website.
