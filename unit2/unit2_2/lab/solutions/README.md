### Explanation

- SQL Injection was fixed using parameterized queries
- Path Traversal was prevented via canonicalization and directory checks
- DOM injection was eliminated by replacing innerHTML with textContent

All fixes preserve functionality while enforcing trust boundaries.
