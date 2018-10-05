var SUCC = 0, ZERO = 1;
var NODE = 0, TIP = 1;

function Succ(pred) {
  return {
    type: SUCC,
    pred: pred
  }
}

var Zero = {type: ZERO};

function Node(left, right) {
  return {
    type: NODE,
    left: left,
    right: right
  }
}

var Tip = {type: TIP};

function build(nat) {
  switch (nat.type) {
    case SUCC: return Node(build(nat.pred), build(nat.pred));
    case ZERO: return Tip;
  }
}

function destroy(tree) {
  switch (tree.type) {
    case NODE: return x => destroy(tree.left)(destroy(tree.right)(x));
    case TIP: return x => x;
  }
}

var num
  = Succ(Succ(Succ(Succ(
    Succ(Succ(Succ(Succ(
    Succ(Succ(Succ(Succ(
    Succ(Succ(Succ(Succ(
    Succ(Succ(Succ(Succ(
    Succ(Succ(Succ(Succ(
      Zero
    ))))
    ))))
    ))))
    ))))
    ))))
    ))));

console.log(destroy(build(num))(0));
