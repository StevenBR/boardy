"use client"

interface BoardListProps {
  orgId: string
  query: {
    search?: string
    favorites?: string
  }
}

export const BoardList = ({
  orgId,
  query
}: BoardListProps) => {
  const data = [] // change to api call

  if (!data?.length && query.search) {
    return (
      <div>
        search for something else
      </div>
    )
  }

  if (!data?.length && query.favorites) {
    return (
      <div>
        no favorites
      </div>
    );
  }

  if (!data.length) {
    return (
      <div>
        no boards at all
      </div>
    )
  }

  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}
