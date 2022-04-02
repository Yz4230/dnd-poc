import styled from "@emotion/styled";
import React from "react";

import type { Account } from "../type";
import type { FC } from "react";

const Card = styled.div({
  padding: "1em",
  border: "1px solid lightgray",
  borderRadius: "1em",
  backgroundColor: "white",
});

type Props = {
  account: Account;
};

const AccountCard: FC<Props> = ({ account }) => {
  return (
    <Card>
      <section css={{ fontSize: "2em" }}>
        {account.first_name} {account.last_name}
      </section>
      <section css={{ marginTop: "1em" }}>{account.email}</section>
    </Card>
  );
};

export default React.memo(AccountCard);
