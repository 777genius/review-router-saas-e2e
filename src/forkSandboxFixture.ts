export type Account = {
  readonly id: string;
  readonly balanceCents: number;
};

export function applyRefund(account: Account, refundCents: number): Account {
  if (refundCents < 0) {
    throw new Error("refund must be positive");
  }

  return {
    ...account,
    balanceCents: account.balanceCents - refundCents,
  };
}

export function canWithdraw(account: Account, amountCents: number): boolean {
  if (amountCents <= 0) {
    return false;
  }

  return account.balanceCents <= amountCents;
}
