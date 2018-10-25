data Nat = Succ Nat | Zero deriving Show

data Tree = Node Tree Tree | Tip deriving Show

build :: Nat -> Tree
build (Succ n) = Node (build n) (build n)
build Zero     = Tip

destroy :: Tree -> a -> a
destroy (Node left right) = \ x -> destroy left (destroy right x)
destroy Tip               = \ x -> x

num :: Nat
num
  = (Succ (Succ (Succ (Succ
    (Succ (Succ (Succ (Succ
    (Succ (Succ (Succ (Succ
    (Succ (Succ (Succ (Succ
    (Succ (Succ (Succ (Succ
    (Succ (Succ (Succ (Succ
    (Succ (Succ (Succ (Succ
      Zero
    ))))
    ))))
    ))))
    ))))
    ))))
    ))))
    ))))

main :: IO ()
main = print $ destroy (build num) 0
