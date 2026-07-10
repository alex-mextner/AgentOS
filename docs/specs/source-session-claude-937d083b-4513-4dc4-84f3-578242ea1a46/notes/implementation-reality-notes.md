# Implementation Reality Notes

> Archive notice: recovered from Claude session 937d083b-4513-4dc4-84f3-578242ea1a46. This is historical execution context only; current authoritative requirements are the top-level specs in `docs/specs`.

## Recovered Interpretation

The session identified two separate tracks:

- Track A: build the product layer first, with Rust implementation work and a simulator-visible shell/product surface.
- Track B: real Pixel 9 bring-up later, with Fuchsia/FEMU/device constraints handled as a longer hardware path.

The recovered `custom-os-fuchsia-spec.pdf` digest states that the product prototype is not blocked by real Pixel 9 hardware. It also states that the real-device track is long and risky, while the product layer can start with mocks and stable contracts.

## Machine And Tooling Constraints

The session recorded these constraints:

- Full Fuchsia checkout/build and FEMU are heavy and require careful timing or a better-suited Linux environment.
- The machine was under load, so heavy compilation was deliberately gated.
- Android Pixel 9 emulator was not treated as the HyperOS target because the source spec points to Fuchsia/FEMU rather than an Android skin.
- The practical early work was specs, Rust workspace planning, code-intelligence setup, and a lightweight simulator/product-shell path.

## Plan Implication

The current repository plan keeps a Pixel 9 form-factor simulator as the first acceptance target, while `050-real-device-operation.md` preserves the path to hardware abstraction, developer-device bring-up, agent-first OS preview, and daily-driver candidate work.
