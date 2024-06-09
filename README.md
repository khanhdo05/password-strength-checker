# Password Strength Checker App

A simple application to check the strength of a password based on various criteria.

## Kata Description

Following this Kata [Part 1](https://agileforall.com/the-password-strength-checker-design-kata-part-1/), [Part 2](https://agileforall.com/the-password-strength-checker-design-kata-part-2/)

Product Champion: "Create a password-strength checker, to be called when a user is registering on our site. Our UI team has requested a single simple method call (no web service, no JavaScript) telling them if a string represents a weak or strong password. They have also assured us that the string cannot possibly be null or nil (whatever that means to you).

### Requirement

1. We need a simple, in-process, easy-to-use password-strength-checking API. 

2. The caller shouldn’t have to have knowledge of what checks are being done to the password string.

3. A simple Boolean return value of true (strong enough) or false (too weak) is wanted.

4. In order to be an acceptable strong password, a string must:

* Have a length > 7 characters.
* Contain at least one alphabetic character.
* Contain at least one digit.

----

That's it! Seems very simple, though people run into the "hard to test" or "now I have to change multiple tests" dilemmas very quickly. The lesson here is that when things become hard to test, we need to step back and consider refactoring our design so that testing is incredibly simple.

If anyone finishes early (there are some clever-but-obfuscated solutions), I give the whole group the following "2nd iteration":

----

"Folks, we have new information regarding user registration:

First, we need to require stronger passwords for our admins.
Admin passwords must also...
* Be > 10 chars long
* Contain a special character

"The UI developers tell us that they will know whether this user is registering as an admin or one of our prospective customers. They will pass a flag to your method."

"Secondly, users who have tried to register on our site are already complaining. Seems that they would like to know *all* the reasons why their password is not strong enough. Give us a way to call your password-strength-checker (perhaps twice) so that we can learn that the password is weak or strong, and if it's weak, all the reasons why it's weak (i.e., not just the first reason in a list)."

"The UI developers suggest that they are willing to call your code once or twice. You can provide them with the list of weaknesses in whatever form you deem appropriate. The UI folks will do what it takes to internationalize."

"Please note: Other stronger rules may apply to either user-type later. However, we really do not anticipate having other forms of users besides the two."

----

## Technologies Used 💻

- Typescript
- React
- Vitest
- C#
- XUnit
- .NET


