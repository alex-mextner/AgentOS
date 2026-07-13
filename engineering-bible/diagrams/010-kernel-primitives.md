# AgentOS Kernel Primitives Spec

## Status

Active follow-up spec for kernel-level MVP design. No kernel implementation
should be added before this spec is used as the authority for primitives and
invariants.

## Purpose

The kernel layer defines the minimum isolation and authority primitives needed
for the simulator-visible AgentOS prototype. It is not a production kernel and
does not claim hardware boot support during MVP.

## MVP Scope

The MVP kernel model includes:

- Tasks: schedulable execution units with stable task identifiers.
- Address spaces: isolated memory ownership regions visible to the simulator
  and tests.
- Memory objects: explicitly created objects that can be mapped or transferred
  only through authorized handles.
- Handle tables: per-task tables that map handle ids to kernel objects plus
  rights.
- Scheduler assumptions: a cooperative or deterministic test scheduler is
  acceptable if it can prove isolation and progress in simulator smoke tests.

The MVP kernel must demonstrate:

- One task cannot mutate another task's memory without a granted object/handle.
- A revoked or missing handle denies access predictably.
- Handle rights are checked at the kernel boundary, not only by user-space
  convention.

## MVP Kernel Interface Shape

The MVP kernel interface should be specified around conceptual operations before
code lands:

- Create and destroy a task.
- Create a memory object and map it into an authorized address space.
- Create, duplicate, transfer, and revoke handles according to rights.
- Wait on an event/handle in the deterministic scheduler; an explicit yield may
  exist only as a test hook.
- Report typed faults and denied operations to the simulator evidence path.

The exact Rust names can change during implementation, but user-space services
must not depend on scheduler behavior that would make later preemption
impossible. Wait APIs must tolerate arbitrary future preemption points rather
than assuming work advances only at explicit yields.

## Initial Authority

The simulator boot path grants initial kernel-level authority to a single
supervisor task created during boot. That supervisor receives the handles needed
to create early services, allocate initial memory objects, and seed service
endpoint handles. No later task receives task-creation or memory-management
authority unless the supervisor or a service explicitly transfers a handle with
those rights.

## Full Maximum Plan

The maximum kernel plan extends the MVP with:

- Preemptive scheduling and priority handling.
- Capability-aware job/process hierarchy.
- Page-level memory accounting and copy-on-write or equivalent efficient
  sharing.
- Kernel event objects for async services.
- Fault reporting that the simulator can surface as structured evidence.
- Optional hardware-oriented abstractions only after simulator behavior is
  stable.

## Boundary Rules

- Kernel code owns primitive invariants, not app policy.
- User-space services may request tasks, memory objects, and handles, but they
  must not bypass kernel rights checks.
- Simulator helpers may observe kernel state for evidence, but they must not be
  required for kernel correctness.

## Acceptance Evidence

This spec is satisfied for MVP when:

- Task, memory-object, scheduler, and handle-table primitives are documented in
  code-level interfaces.
- Tests prove denied memory/handle access remains denied.
- A simulator smoke path can observe at least task creation and first app launch
  without relying on ambient global authority.
