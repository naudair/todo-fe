import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Card() {

 return <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
      Hello this is todo list.
    </HoverCardContent>
  </HoverCard>

}