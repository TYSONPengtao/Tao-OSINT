# TAO OSINT Integration Notes

## Historical material

This local folder currently contains multiple generations:

- `星座.py` — unrelated/adjacent 88-constellation spiral visualization experiment
- `莘塍一中观星项目1` — newer packaged v0.2 Windows build and its data
- `莘塍一中观星项目2/Photo-star-positioning-main` — older readable Python source

The packaged executable is preserved but was not executed during the optimization pass.

## Key finding

The readable old source contains:

```text
天津四 hour angle = 13h10m23.38s
```

while both the newer `stars1.txt` and v0.2 `data.json` correspond to:

```text
天津四 hour angle = 12h10m23.38s
```

That one-hour difference means approximately 15 degrees of angular change in the derived longitude term and materially changes the positioning result.

## Reproduction

Using the newer v0.2 observations and the legacy equations:

- pair focal estimates: ~551.663, 557.335, 554.456 px
- mean focal estimate: ~554.48454 px
- v0.2 stored focal value: ~554.48468 px

This close match confirms that the refactored calculation reproduces the packaged project's focal solution.

## Migration recommendation

For Tao-OSINT, migrate the **optimized source**, sample configuration, tests, and documentation.

Do not migrate the bundled Python runtime/OpenCV DLL tree or unknown historical EXE as source-of-truth.

Suggested destination:

```text
Tao-OSINT/
└── projects/
    └── photo-stargazing-positioning/
        ├── core/
        ├── samples/
        ├── tests/
        ├── docs/
        └── web/
```