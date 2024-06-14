import { RouteConfig } from '@medusajs/admin';
import { Table, Input } from '@medusajs/ui';
import { useAdminStore } from 'medusa-react';

const Page = () => {
  const { store, isLoading } = useAdminStore();

  return (
    <div className='flex h-full flex-col'>
      <div className='gap-y-xsmall flex w-full grow flex-col'>
        <div className='rounded-rounded bg-grey-0 border-grey-20 flex h-full w-full flex-col overflow-hidden border min-h-[350px] h-fit'>
          <div className='relative'></div>
          <div className='flex grow flex-col'>
            <div className='px-xlarge py-large'>
              <div className='flex items-start justify-between'>
                <div className='inter-large-semibold gap-x-base text-grey-40 flex'>
                  <div className='cursor-pointer text-grey-90'>Stores</div>
                </div>
                <div></div>
              </div>
            </div>
            <div className='px-xlarge'>
              <div className='flex flex-col grow'>
                <div>
                  <div className='flex flex-col'>
                    <div className='mb-2 flex w-full justify-between'>
                      <div></div>
                      <div>
                        <div className='w-[250px]'>
                          <Input placeholder='Search' id='search-input' type='search' />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Table>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Customer</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        <Table.Body>
                          {isLoading ? (
                            <Table.Row>
                              <Table.Cell>Loading...</Table.Cell>
                            </Table.Row>
                          ) : (
                            <Table.Row>
                              <Table.Cell>{store.id}</Table.Cell>
                              <Table.Cell>{store.name}</Table.Cell>
                            </Table.Row>
                          )}
                        </Table.Body>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-xlarge w-full'></div>
      </div>
    </div>
  );
};

export const config: RouteConfig = {
  link: {
    label: 'Custom Route',
  },
};

export default Page;
