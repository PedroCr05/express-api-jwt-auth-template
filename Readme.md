## Questions

- Why are we putting our own string for the JWT_Secret? Is there a way to have the library to do that for us or in another word. Is there another way of doing this method?

- So kinda confused, but how exactly do I test the verifying of the token?

## Answered / Figured It Out

- When creating the token. Is it possible to hide the token within the test? As in like instead of... is it possible to hide what is inside the parenthesis? Or is that not possible? (Never mind the lesson answered this question for me. We use the split method| .split(``)[1] )

```
{
  "token": "Bearer (The Token String here)"
}
```
