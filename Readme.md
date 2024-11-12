## Questions

- Why are we putting our own string for the JWT_Secret? Is there a way to have the library to do that for us or in another word. Is there another way of doing this method?

- So kinda confused, but how exactly do I test the verifying of the token?

- So when trying to get something to show up in the post for /test-jwt/signup. I keep getting a 404 Error. How do I test this properly?

- Now with not knowing how to do the previous test. This actually snow balls into the next part of the testing. How do I test that my token even shows up and not a 404 error?

- What is the models file even for? So confusing...

- Uhh another issue! Can't even test the sign up?

```
{
    "username": "<insert test username>",
    "password": "<insert test password>"
}
```

## Answered / Figured It Out

- When creating the token. Is it possible to hide the token within the test? As in like instead of... is it possible to hide what is inside the parenthesis? Or is that not possible? (Never mind the lesson answered this question for me. We use the split method| .split(``)[1] )

```
{
  "token": "Bearer (The Token String here)"
}
```
