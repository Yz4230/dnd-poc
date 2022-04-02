import styled from "@emotion/styled";
import { useState } from "react";

import AccountCard from "./components/AccountCard";
import Draggable from "./components/Draggable";
import { mockAccounts } from "./mocks";

import type { Account, Position, Rect } from "./type";

const Main = styled.div({
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const List = styled.div({
  width: "30em",
  padding: "0.5em",
  border: "1px solid lightgray",
  display: "flex",
  flexFlow: "column",
  gap: "0.5em",
});

type DragObject = {
  account: Account;
  rect: Rect;
  offset: Position;
  initial: Position;
};

function App() {
  const [accounts, setAccounts] = useState(() => mockAccounts.slice(0, 5));
  const [dragObject, setDragObject] = useState<DragObject | null>(null);

  const handleMouseDown = (e: React.MouseEvent, account: Account) => {
    const bound = e.currentTarget.getBoundingClientRect();
    const offset = { x: e.clientX - bound.x, y: e.clientY - bound.y };
    const initial = { x: e.clientX, y: e.clientY };

    setDragObject({ account, rect: bound, offset, initial });
  };

  const handleMouseEnter = (account: Account) => {
    if (dragObject) {
      const newAccounts = accounts.filter((a) => a.id !== account.id);
      newAccounts.splice(accounts.indexOf(dragObject.account), 0, account);
      setAccounts(newAccounts);
    }
  };

  return (
    <Main>
      <List
        css={[{ position: "relative" }, dragObject && { cursor: "grabbing" }]}
        onMouseUp={() => setDragObject(null)}
      >
        {accounts.map((account) => (
          <div
            key={account.id}
            css={[
              { display: "grid", cursor: "grab" },
              dragObject && { userSelect: "none" },
              dragObject?.account.id === account.id && { visibility: "hidden" },
            ]}
            onMouseDown={(e) => handleMouseDown(e, account)}
            onMouseEnter={() => handleMouseEnter(account)}
          >
            <AccountCard account={account} />
          </div>
        ))}
        {dragObject && (
          <Draggable
            rect={dragObject.rect}
            offset={dragObject.offset}
            initial={dragObject.initial}
          >
            <AccountCard account={dragObject.account} />
          </Draggable>
        )}
      </List>
    </Main>
  );
}

export default App;
