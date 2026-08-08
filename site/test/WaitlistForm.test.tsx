import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WaitlistForm from '../src/components/WaitlistForm';

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function mockFetch(body: unknown, ok = true) {
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => new Response(JSON.stringify(body), { status: ok ? 200 : 502 })),
  );
}

describe('WaitlistForm', () => {
  it('confirms only when the server reports stored:true', async () => {
    mockFetch({ ok: true, stored: true });
    const user = userEvent.setup();
    render(<WaitlistForm />);
    await user.type(screen.getByLabelText('Email address'), 'yes@example.com');
    await user.click(screen.getByRole('button', { name: /join the waitlist/i }));
    await waitFor(() => expect(screen.getByText(/on the list/i)).toBeInTheDocument());
  });

  it('does NOT confirm when the server reports stored:false', async () => {
    mockFetch({ ok: true, stored: false });
    const user = userEvent.setup();
    render(<WaitlistForm />);
    await user.type(screen.getByLabelText('Email address'), 'no@example.com');
    await user.click(screen.getByRole('button', { name: /join the waitlist/i }));
    await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument());
    expect(screen.queryByText(/on the list/i)).not.toBeInTheDocument();
  });

  it('rejects an invalid email client-side without calling the API', async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);
    const user = userEvent.setup();
    render(<WaitlistForm />);
    await user.type(screen.getByLabelText('Email address'), 'bogus');
    await user.click(screen.getByRole('button', { name: /join the waitlist/i }));
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
